const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  loadFamilyVine: async () => {
    await ipcRenderer.invoke('load-family-vine');
  },
  createFamilyVine: async (familyVineName) => {
    await ipcRenderer.invoke('create-family-vine', familyVineName);
  },

  createPerson: async (firstName, lastName) => {
    return await ipcRenderer.invoke('create-person', firstName, lastName);
  },
  getAllPeople: async () => {
    return await ipcRenderer.invoke('get-all-people');
  },
  getPersonByID: async (id) => {
    return await ipcRenderer.invoke('get-person-by-id', id);
  },

  createLocation: async (locationName) => {
    return await ipcRenderer.invoke('create-location', locationName);
  },
  getAllLocations: async () => {
    return await ipcRenderer.invoke('get-all-locations');
  },
  getLocationByID: async (id) => {
    return await ipcRenderer.invoke('get-location-by-id', id);
  },

  createMedia: async (filepath, description, personIds, locationId, dateCreated) => {
    return await ipcRenderer.invoke('create-media', filepath, description, personIds, locationId, dateCreated);
  },
  getAllMedia: async () => {
    return await ipcRenderer.invoke('get-all-media');
  },
  getMediaByID: async (id) => {
    return await ipcRenderer.invoke('get-media-by-id', id);
  }
});
