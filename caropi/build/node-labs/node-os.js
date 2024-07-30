"use strict";
const os = require('node:os');
//const eol = os.eol;
const arch = os.arch();
const availableParallelism = os.availableParallelism();
//const osConstants = os.constants;
const cpus = os.cpus();
const osVersion = os.version();
const osDevNull = os.devNull; // platfomr-specific file path
const osEndianness = os.endianness();
const osFreemem = os.freemem(); //  amount of free system memory in bytes as an integer.
const osGetPriority = os.getPriority(0);
const homeDirectory = os.homedir();
const osHostname = os.hostname();
const osLoadavg = os.loadavg();
const osMachine = os.machine();
const osNetworkInterface = os.networkInterfaces();
const platform = os.platform();
const release = os.release();
const osVariables = [
    arch,
    availableParallelism,
    cpus,
    osDevNull,
    osVersion,
    osEndianness,
    osFreemem,
    osGetPriority,
    homeDirectory,
    osHostname,
    osLoadavg,
    osMachine,
    osNetworkInterface,
    platform,
    release,
];
const visualizeOsViariables = () => osVariables.forEach((element) => console.log(`Soy tu ${element}`));
visualizeOsViariables();
