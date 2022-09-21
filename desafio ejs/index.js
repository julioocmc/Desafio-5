const express = require("express");
const { routerProducto } = require("./routeProductos");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

const PORT = 8080;
const listener = app.listen(PORT, function () {
    console.log(`Your app is listening to port: ${listener.address().port}`);
});
listener.on("error", (error) => console.log(`error en el servidor: ${error}`));

app.use(express.static("public"));
app.get("/", (req, res) => {
    res.send("hola, server ONLINE");
});
app.use("/api/productos", routerProducto);