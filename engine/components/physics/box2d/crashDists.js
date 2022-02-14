/*
* This is going to serve as the CRASH object for dists.js
* For now it's in its own file
*/
var dists2 = {
	CRASH: {
		init: function (component) {
			var crash = ige.isServer ? new global.Crash() : new Crash();

			component.cx_Rbush = crash.RBush;
			component.cx_SAT = crash.SAT;
			component.cx_Vector = crash.Vector;
			component.cx_Response = crash.Response;
			component.cx_Point = crash.Point;
			component.cx_circle = crash.circle;
			component.cx_Box = crash.Box;
			component.cx_Polygon = crash.Polygon;
		},

		createBody: function (self, entity, body, isLossTolerant) {
			var type = body.type;
			var collider = new component.cx_Box(
				new component.cx_Vector(entity._translate.x, entity._translate.y),
				entity.width(),
				entity.height()
			);

			collider.data = {
				type: type
			};

			self.crash.insert(collider);

			collider._entity = entity;
			collider.velocity = { x: 0, y: 0 };

			entity.body = collider;

			entity.rotateTo(0, 0, entity._rotate.z);

			return collider;
		}
	}
};
