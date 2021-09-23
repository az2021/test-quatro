import { Server, Model, Factory } from "miragejs";
import faker from "faker";

export function makeServer({ environment = "development" } = {}) {
    let server = new Server({
        environment,

        models: {
            user: Model,
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
        },

        seeds(server) {
            server.createList("user", 25);
        },

        routes() {
            this.get("/api/users", (schema) => {
                return schema.users.all();
            });
        },
    });

    return server;
}