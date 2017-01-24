"use strict";

// say hello name
module.exports = _name => {
    const name = _name ? _name : "nodejs";
    return `hello ${name}`;
}
