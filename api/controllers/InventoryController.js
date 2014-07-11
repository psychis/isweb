/**
 * InventoryController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

var InventoryController = {
    
	index: function(req,res) {

		Inventory.findAll(function(err, inventory){
			if (err) return res.send(err, 500);

			res.view({
				model: Inventory
			});
		});
	},

	new: function(req,res) {
		res.view();
	},

	create: function(req,res){
		var params = _.extend(req.query || {}, req.params || {}, req.body || {}); 

		Inventory.create(params, function inventoryCreated (err, createdInventory) {
			if (err) return res.send(err,500);
			res.redirect('/inventory/show/' +createdInventory.id); 
		});
	},

	show: function(req,res){
		var id = req.param('id')

		if (!id) return res.send("No id specified.", 500); 
		Inventory.find(id, function inventoryFound(err, inventory) {
			if(err) return res.sender(err,500);
			if(!inventory) return res.send("Asset "+id+" not found.",404);

			res.view({
				inventory: inventory
			})
		});
			
	},  

	edit: function(req,res){
		var id = req.param('id');

		if (!id) return res.send("No id specified.", 500);

		Inventory.find(id, function inventoryFround (err,inventory){
			if (err) return res.send(err,500);
			if (!inventory) return res.send ("Asset "+id+" not found.",404);

			res.view({
				inventory: inventory
			})
		});

	}, 
	
	update: function(req,res){

		var params = _.extend(req.query || {}, req.params || {}, req.body || {});
		var id = params.id;

		if (!id) return res.send("No id specified.",500);

		Inventory.update(id, params, function inventoryUpdated(err, updatedInventory) {
			if (err) {
				res.redirect('/inventory/edit');
			}
			if(!updatedInventory){
				res.redirect('/inventory/edit');
			}
			res.redirect('/user/show'+id);
		});

	},

	destroy: function(req,res){
		var id = req.param('id'); 
		if (!id) return res.send("No id specified.",500);

		Inventory.find(id, function foundInventory(err, inventory){
			if (err) return res.send(err,500); 
			if (!inventory) return res.send("No asset with that id exists.",404);

			Inventory.destroy(id, function userDestroyed(err) {
				if (err) return res.send(err,500);

				return res.redirect('/inventory');

			});
		})

	}

  
};

module.exports = InventoryController; 