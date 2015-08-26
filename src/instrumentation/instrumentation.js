window.__can_devtools_instrumentation_injected__ = true;

import Agent from 'can-devtools/instrumentation/agent/';
import sendMessage from 'can-devtools/instrumentation/send-message/';
import findCan from 'can-devtools/instrumentation/util/find-can';

var canFound = function() {
	sendMessage('canFound');
	window.__can_devtools_instrumentation_agent__ = new Agent(window.can);
}

var canNotFound = function() {
	sendMessage('noCanFound');
}

findCan(canFound, canNotFound);