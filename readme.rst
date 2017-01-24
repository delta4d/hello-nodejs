Hello Nodejs |travis|
=====================

A hello world app for node.js_.


Installation
------------

.. code::

    npm install delta-hello-nodejs


Usage
-----

.. code::

    var hello = require("delta-hello-nodejs");
    var hello_world = hello("world");
    console.log(hello_world); // => hello world


Tests
-----

.. code::

    npm test


Contributing
------------

Feel free to open an issue_ or make a pr.


.. _node.js: https://nodejs.org
.. _issue: https://github.com/delta4d/hello-nodejs/issues
.. |travis| image:: https://travis-ci.org/delta4d/hello-nodejs.svg?branch=master
    :target: https://travis-ci.org/delta4d/hello-nodejs
