"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const http = __importStar(require("http"));
const app_1 = __importDefault(require("../app"));
const port = process.env.PORT || 3000;
async function start() {
    try {
        app_1.default.set("port", port);
        const server = http.createServer(app_1.default);
        server.listen(port, () => {
            // console.log(`Server listening at port ${port}`);
        });
    }
    catch (err) {
        // console.log("Server error", err.message);
        // console.log(err);
        process.exit(1);
    }
}
start();
