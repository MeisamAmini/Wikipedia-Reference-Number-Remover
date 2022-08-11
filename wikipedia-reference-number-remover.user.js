// ==UserScript==
// @name         Wikipedia Reference Number Remover
// @version      0.1
// @description  Removes all reference numbers from all wikipedia articles in any language.
// @author       Meisam Amini
// @match        https://*.wikipedia.org/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Select all reference numbers and remove them
    const references = document.querySelectorAll("sup.reference")
    references.forEach(removeReference);

    function removeReference(reference, index, references) {
        reference.remove();
    }
})();