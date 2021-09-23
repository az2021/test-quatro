import { Server, Model, Factory } from "miragejs";
import faker from "faker";

export function makeServer({ environment = "development" } = {}) {
    let server = new Server({
        environment,

        models: {
            user: Model,
            restaurent: Model
        },

        factories: {
            user: Factory.extend({
                name() {
                    return faker.name.findName();
                },
                title() {
                    return faker.name.title();
                },
            }),
            restaurent: Factory.extend({
                type() {
                    return faker.lorem.words()
                },
                rest() { return faker.lorem.word() },
                info() { return faker.address.direction() }
            })
        },

        seeds(server) {
            server.createList("user", 25);
            server.createList("restaurent", 5);
        },

        routes() {
            this.get("/api/users", (schema) => {
                return schema.users.all();
            });
            this.get("/api/restaurents", () => {
                return {
                    restaurents: [
                        { rest: "Karim 24", type: "Fast Food Local", info: "5km, Livraison en 24 Minutes" },
                        { rest: "BB 24", type: "African Food ", info: "15km, Livraison en 34 Minutes" },
                        { rest: "Prince De Shawarma 58", type: "African FastFood ", info: "15km, Livraison en 34 Minutes" }
                    ]
                }
            });
        },
    });

    return server;
}