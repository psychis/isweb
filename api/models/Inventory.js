/**
 * Inventory
 *
 * @module      :: Model
 * @description :: Model of Inventory for Psych I.S. 
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

 var Inventory = {

  attributes: {
  	
  	serial: {
      type: 'string'
      },

  	asset: {
      type: 'string'
      
    }, 

  	epic: {
      type: 'string'
    },

  	make: {
      type: 'string'
    },

  	model: {
      type: 'string'
    },

    division: {
      type: 'string'
      
    },

    primary_user: {
      type: 'string'
    },

    physical_location: {
      type: 'string'
    },

    room_floor: {
      type: 'string'
    },

    IP: {
      type: 'string'
    },

    date: {
      type: 'date'
    },

    tech: {
      type: 'string'
    },

    notes: {
      type: 'string'
    },

    retire: {
      type: 'boolean'
    },

  }

};

module.exports = Inventory;