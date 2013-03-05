//>>built
define("dojox/geo/openlayers/GeometryFeature","dojo/_base/declare,dojo/_base/array,dojo/_base/lang,dojox/gfx/matrix,./Point,./LineString,./Collection,./Feature".split(","),function(j,i,e,k,h,f,g,l){return j("dojox.geo.openlayers.GeometryFeature",l,{constructor:function(a){this._geometry=a;this._shapeProperties={};this._stroke=this._fill=null},_createCollection:function(a){var b=this.getLayer(),a=this.createShape(b.getSurface(),a);b.getViewport().add(a);return a},_getCollectionShape:function(a){var b=
a.shape;if(null==b)b=this._createCollection(a),a.shape=b;return b},renderCollection:function(a){if(void 0==a)a=this._geometry;s=this._getCollectionShape(a);var b=this.getShapeProperties();s.setShape(b);i.forEach(a.coordinates,function(a){if(a instanceof h)this.renderPoint(a);else if(a instanceof f)this.renderLineString(a);else if(a instanceof g)this.renderCollection(a);else throw Error();},this);this._applyStyle(a)},render:function(a){if(void 0==a)a=this._geometry;if(a instanceof h)this.renderPoint(a);
else if(a instanceof f)this.renderLineString(a);else if(a instanceof g)this.renderCollection(a);else throw Error();},getShapeProperties:function(){return this._shapeProperties},setShapeProperties:function(a){this._shapeProperties=a;return this},createShape:function(a,b){if(!b)b=this._geometry;var d=null;if(b instanceof h)d=a.createCircle();else if(b instanceof f)d=a.createPolyline();else if(b instanceof g){var c=a.createGroup();i.forEach(b.coordinates,function(b){b=this.createShape(a,b);c.add(b)},
this);d=c}else throw Error();return d},getShape:function(){var a=this._geometry;if(!a)return null;if(a.shape)return a.shape;this.render();return a.shape},_createPoint:function(a){var b=this.getLayer(),a=this.createShape(b.getSurface(),a);b.getViewport().add(a);return a},_getPointShape:function(a){var b=a.shape;if(null==b)b=this._createPoint(a),a.shape=b;return b},renderPoint:function(a){if(void 0==a)a=this._geometry;var b=this.getLayer(),d=b.getDojoMap();s=this._getPointShape(a);var c=e.mixin({},
this._defaults.pointShape),c=e.mixin(c,this.getShapeProperties());s.setShape(c);c=this.getCoordinateSystem();c=this._getLocalXY(d.transform(a.coordinates,c));d=c[0];c=c[1];(b=b.getViewport().getTransform())&&s.setTransform(k.translate(d-b.dx,c-b.dy));this._applyStyle(a)},_createLineString:function(a){var b=this.getLayer(),d=this.createShape(b._surface,a);b.getViewport().add(d);return a.shape=d},_getLineStringShape:function(a){var b=a.shape;if(null==b)b=this._createLineString(a),a.shape=b;return b},
renderLineString:function(a){if(void 0==a)a=this._geometry;var b=this.getLayer(),d=b.getDojoMap(),c=this._getLineStringShape(a),g=this.getCoordinateSystem(),h=Array(a.coordinates.length),f=b.getViewport().getTransform();i.forEach(a.coordinates,function(a,b){var c=this._getLocalXY(d.transform(a,g));f&&(c[0]-=f.dx,c[1]-=f.dy);h[b]={x:c[0],y:c[1]}},this);b=e.mixin({},this._defaults.lineStringShape);b=e.mixin(b,this.getShapeProperties());b=e.mixin(b,{points:h});c.setShape(b);this._applyStyle(a)},_applyStyle:function(a){if(a&&
a.shape){var b=this.getFill(),d;!b||e.isString(b)||e.isArray(b)?d=b:(d=e.mixin({},this._defaults.fill),d=e.mixin(d,b));var b=this.getStroke(),c;!b||e.isString(b)||e.isArray(b)?c=b:(c=e.mixin({},this._defaults.stroke),c=e.mixin(c,b));this._applyRecusiveStyle(a,c,d)}},_applyRecusiveStyle:function(a,b,d){var c=a.shape;c.setFill&&c.setFill(d);c.setStroke&&c.setStroke(b);a instanceof g&&i.forEach(a.coordinates,function(a){this._applyRecusiveStyle(a,b,d)},this)},setStroke:function(a){this._stroke=a;return this},
getStroke:function(){return this._stroke},setFill:function(a){this._fill=a;return this},getFill:function(){return this._fill},remove:function(){var a=this._geometry,b=a.shape;a.shape=null;b&&b.removeShape();a instanceof g&&i.forEach(a.coordinates,function(a){this.remove(a)},this)},_defaults:{fill:null,stroke:null,pointShape:{r:30},lineStringShape:null}})});