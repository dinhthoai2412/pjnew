/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'pages/homepage'
  },

  '/test': {
      view: 'test'
  },

  'POST /major/add' : 'major.add',
  'POST /major/delete' : 'major.delete',
  'POST /major/update' : 'major.update',
  'POST /major/getall' : 'major.getAll',
  'POST /major/getone' : 'major.getOne',

  'POST /mark/add' : 'mark.add',
  'POST /mark/delete' : 'mark.delete',
  'POST /mark/update' : 'mark.update',
  'POST /mark/getall' : 'mark.getAll',
  'POST /mark/getone' : 'mark.getOne',

  'POST /province/add' : 'province.add',
  'POST /province/delete' : 'province.delete',
  'POST /province/update' : 'province.update',
  'POST /province/getall' : 'province.getAll',
  'POST /province/getone' : 'province.getOne',

  'POST /school/add' : 'school.add',
  'POST /school/delete' : 'school.delete',
  'POST /school/update' : 'school.update',
  'POST /school/getall' : 'school.getAll',
  'POST /school/getone' : 'school.getOne',

  'POST /sector/add' : 'sector.add',
  'POST /sector/delete' : 'sector.delete',
  'POST /sector/update' : 'sector.update',
  'POST /sector/getall' : 'sector.getAll',
  'POST /sector/getone' : 'sector.getOne',

  'POST /subject/add' : 'subject.add',
  'POST /subject/delete' : 'subject.delete',
  'POST /subject/update' : 'subject.update',
  'POST /subject/getall' : 'subject.getAll',
  'POST /subject/getone' : 'subject.getOne',

  'POST /subjectgroup/add' : 'subjectGroup.add',
  'POST /subjectgroup/delete' : 'subjectGroup.delete',
  'POST /subjectgroup/update' : 'subjectGroup.update',
  'POST /subjectgroup/getall' : 'subjectGroup.getAll',
  'POST /subjectgroup/getone' : 'subjectGroup.getOne'

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝



  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝


  //  ╔╦╗╦╔═╗╔═╗
  //  ║║║║╚═╗║
  //  ╩ ╩╩╚═╝╚═╝


};
