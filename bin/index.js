#! /usr/bin/env node

"use strict";

const os = require("os");
const cli = require("../dist/cli/index").CLI;

cli.execute(os.userInfo().username);
