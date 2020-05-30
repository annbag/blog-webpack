/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/404.html":
/*!**********************!*\
  !*** ./src/404.html ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"404.html\");\n\n//# sourceURL=webpack:///./src/404.html?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"index.html\");\n\n//# sourceURL=webpack:///./src/index.html?");

/***/ }),

/***/ "./src/scripts/components/add-comment-form-component.ts":
/*!**************************************************************!*\
  !*** ./src/scripts/components/add-comment-form-component.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.renderAddCommentForm = void 0;\r\nfunction renderAddCommentForm(post, $post, cb) {\r\n    var $div = document.createElement('div');\r\n    var template = \"\\n        <form class=\\\"add-comment-form\\\">\\n            <input type=\\\"text\\\" class=\\\"form-control new-comment\\\" placeholder=\\\"Napisz komentarz...\\\" required>\\n            <input type=\\\"submit\\\" class=\\\"hidden\\\"/>\\n        </form>\";\r\n    $div.innerHTML = template;\r\n    var $comments = $post.querySelector('.comments');\r\n    $comments.appendChild($div);\r\n    var $form = $comments.querySelector('.add-comment-form');\r\n    $form.addEventListener('submit', function (e) {\r\n        e.preventDefault();\r\n        var $newComment = $comments.querySelector('.new-comment');\r\n        var id = 'comment-' + Date.now();\r\n        var body = $newComment.value;\r\n        var comment = { id: id, body: body };\r\n        cb(comment);\r\n        $newComment.value = '';\r\n    });\r\n}\r\nexports.renderAddCommentForm = renderAddCommentForm;\r\n\n\n//# sourceURL=webpack:///./src/scripts/components/add-comment-form-component.ts?");

/***/ }),

/***/ "./src/scripts/components/add-post-form-component.ts":
/*!***********************************************************!*\
  !*** ./src/scripts/components/add-post-form-component.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.renderAddPostForm = void 0;\r\nfunction renderAddPostForm(cb) {\r\n    var $div = document.createElement('div');\r\n    var template = \"\\n        <form class=\\\"add-post-form\\\">\\n            <div class=\\\"form-group\\\">\\n                <textarea class=\\\"form-control\\\" cols=\\\"30\\\" rows=\\\"3\\\" required></textarea>\\n                <button type=\\\"submit\\\" class=\\\"btn btn-primary mt-3\\\">dodaj wpis</button>\\n            </div>\\n        </form>\";\r\n    $div.innerHTML = template;\r\n    var $addPost = document.querySelector('.add-post');\r\n    $addPost.appendChild($div);\r\n    var $form = document.querySelector('.add-post-form');\r\n    $form.addEventListener('submit', function (e) {\r\n        e.preventDefault();\r\n        var $textarea = document.querySelector('textarea');\r\n        var post = { id: Date.now(), date: Date.now(), body: $textarea.value, comments: [] };\r\n        cb(post);\r\n        $textarea.value = '';\r\n    });\r\n}\r\nexports.renderAddPostForm = renderAddPostForm;\r\n\n\n//# sourceURL=webpack:///./src/scripts/components/add-post-form-component.ts?");

/***/ }),

/***/ "./src/scripts/components/comment-component.ts":
/*!*****************************************************!*\
  !*** ./src/scripts/components/comment-component.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.removeComment = exports.renderComment = exports.renderComments = void 0;\r\nvar posts_service_1 = __webpack_require__(/*! ../services/posts-service */ \"./src/scripts/services/posts-service.ts\");\r\nvar confirm_deletion_popup_component_1 = __webpack_require__(/*! ../components/confirm-deletion-popup-component */ \"./src/scripts/components/confirm-deletion-popup-component.ts\");\r\nvar isEditEnabled = false;\r\nvar ENTER_KEY_CODE = 13;\r\nfunction renderComments(post, $post) {\r\n    // if (post.comments.length === 0) { return }\r\n    var $ul = document.createElement('ul');\r\n    $ul.classList.add('list-group');\r\n    $ul.classList.add('mt-3');\r\n    post.comments.forEach(function (comment) {\r\n        renderComment($ul, post, comment, function ($comment) {\r\n            removeComment(post, comment, $comment);\r\n        });\r\n    });\r\n    var $comments = $post.querySelector('.comments');\r\n    $comments.appendChild($ul);\r\n}\r\nexports.renderComments = renderComments;\r\nfunction renderComment($ul, post, comment, cb) {\r\n    var $li = document.createElement('li');\r\n    $li.classList.add('media');\r\n    $li.classList.add('list-group-item');\r\n    $li.classList.add('d-flex');\r\n    var template = \"\\n        <div class=\\\"avatar mr-3 d-flex align-item-start\\\"><span class=\\\"fas fa-user-circle\\\"></span></div>\\n        <p class=\\\"media-body comment-body mb-0\\\">\" + comment.body + \"</p>\\n        <div class=\\\"comment-btns row justify-content-end\\\">\\n            <button class=\\\"edit-comment-btn\\\"><i class=\\\"fas fa-pen\\\"></i></button>\\n            <div class=\\\"w-100\\\"></div>\\n            <button class=\\\"del-comment-btn\\\"><i class=\\\"fas fa-trash-alt\\\"></i></button>\\n        </div>\";\r\n    $li.innerHTML = template;\r\n    var $editBtn = $li.querySelector('.edit-comment-btn');\r\n    $editBtn.addEventListener('click', function (e) {\r\n        if (isEditEnabled) {\r\n            isEditEnabled = false;\r\n            saveEditComment(post, comment, $li);\r\n        }\r\n        else {\r\n            isEditEnabled = true;\r\n            renderEditComment(post, comment, $li);\r\n        }\r\n    });\r\n    var $delBtn = $li.querySelector('.del-comment-btn');\r\n    $delBtn.addEventListener('click', function () {\r\n        confirm_deletion_popup_component_1.renderConfirmDeletionPopup(function () {\r\n            cb($li);\r\n        });\r\n    });\r\n    $ul.appendChild($li);\r\n}\r\nexports.renderComment = renderComment;\r\nfunction removeComment(post, comment, $comment) {\r\n    var filteredComments = post.comments.filter(function (x) { return x.id !== comment.id; });\r\n    post.comments = filteredComments;\r\n    $comment.remove();\r\n    posts_service_1.editPost(post);\r\n}\r\nexports.removeComment = removeComment;\r\nfunction saveEditComment(post, comment, $li) {\r\n    var $input = $li.querySelector('.comment-body-edit');\r\n    comment.body = $input.value;\r\n    $input.remove();\r\n    var $commentBody = $li.querySelector('.comment-body');\r\n    $commentBody.textContent = comment.body;\r\n    $commentBody.classList.remove('hidden');\r\n    posts_service_1.editPost(post);\r\n}\r\nfunction renderEditComment(post, comment, $li) {\r\n    var $commentBody = $li.querySelector('.comment-body');\r\n    $commentBody.classList.add('hidden');\r\n    var $input = document.createElement('input');\r\n    $input.addEventListener('keypress', function (e) {\r\n        if (e.keyCode === ENTER_KEY_CODE) {\r\n            isEditEnabled = false;\r\n            saveEditComment(post, comment, $li);\r\n        }\r\n    });\r\n    $input.classList.add('comment-body-edit');\r\n    $input.value = comment.body;\r\n    $li.insertBefore($input, $commentBody);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/scripts/components/comment-component.ts?");

/***/ }),

/***/ "./src/scripts/components/confirm-deletion-popup-component.ts":
/*!********************************************************************!*\
  !*** ./src/scripts/components/confirm-deletion-popup-component.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.renderConfirmDeletionPopup = void 0;\r\nfunction renderConfirmDeletionPopup(cb) {\r\n    var $div = document.createElement('div');\r\n    $div.classList.add('modal-content');\r\n    var template = \"\\n        <div class=\\\"modal\\\" tabindex=\\\"-1\\\" role=\\\"dialog\\\">\\n            <div class=\\\"modal-dialog\\\" role=\\\"document\\\">\\n                <div class=\\\"modal-content\\\">\\n                    <div class=\\\"modal-header\\\">\\n                        <h5 class=\\\"modal-title\\\">Are you sure want to delete?</h5>\\n                        <button type=\\\"button\\\" class=\\\"close close-btn\\\" data-dismiss=\\\"modal\\\" aria-label=\\\"Close\\\">\\n                            <span aria-hidden=\\\"true\\\">&times;</span>\\n                        </button>\\n                    </div>\\n                    <div class=\\\"modal-footer\\\">\\n                        <button type=\\\"button\\\" class=\\\"btn btn-secondary cancel-btn\\\" data-dismiss=\\\"modal\\\">Cancel</button>\\n                        <button type=\\\"button\\\" class=\\\"btn btn-primary confirm-btn\\\">OK</button>\\n                    </div>\\n                </div>\\n            </div>\\n        </div>\";\r\n    $div.innerHTML = template;\r\n    var $container = document.querySelector('.container');\r\n    $container.appendChild($div);\r\n    showModal();\r\n    var $closeBtn = $div.querySelector('.close-btn');\r\n    $closeBtn.addEventListener('click', function () {\r\n        hideModal();\r\n    });\r\n    var $cancelBtn = $div.querySelector('.cancel-btn');\r\n    $cancelBtn.addEventListener('click', function () {\r\n        hideModal();\r\n    });\r\n    var $confirmBtn = $div.querySelector('.confirm-btn');\r\n    $confirmBtn.addEventListener('click', function () {\r\n        cb();\r\n        hideModal();\r\n    });\r\n}\r\nexports.renderConfirmDeletionPopup = renderConfirmDeletionPopup;\r\nfunction hideModal() {\r\n    var $body = document.querySelector('body');\r\n    $body.classList.remove('modal-open');\r\n    var $modal = document.querySelector('.modal-content');\r\n    $modal.remove();\r\n}\r\nfunction showModal() {\r\n    var $body = document.querySelector('body');\r\n    $body.classList.add('modal-open');\r\n    var $modal = document.querySelector('.modal');\r\n    $modal.classList.add('d-block');\r\n    $modal.style.backgroundColor = 'rgba(0,0,0,.5)';\r\n}\r\n\n\n//# sourceURL=webpack:///./src/scripts/components/confirm-deletion-popup-component.ts?");

/***/ }),

/***/ "./src/scripts/components/error-message-component.ts":
/*!***********************************************************!*\
  !*** ./src/scripts/components/error-message-component.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.displayError = void 0;\r\nvar generalMessage = 'Upss.. coś poszło nie tak ☹';\r\nfunction displayError(message) {\r\n    if (message === void 0) { message = generalMessage; }\r\n    var template = \"\\n        <p>\" + message + \"</p>\";\r\n    var outlet = document.querySelector('.outlet');\r\n    outlet.innerHTML = template;\r\n    console.error(message);\r\n}\r\nexports.displayError = displayError;\r\n\n\n//# sourceURL=webpack:///./src/scripts/components/error-message-component.ts?");

/***/ }),

/***/ "./src/scripts/components/post-component.ts":
/*!**************************************************!*\
  !*** ./src/scripts/components/post-component.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.renderPost = void 0;\r\nvar confirm_deletion_popup_component_1 = __webpack_require__(/*! ../components/confirm-deletion-popup-component */ \"./src/scripts/components/confirm-deletion-popup-component.ts\");\r\nvar posts_service_1 = __webpack_require__(/*! ../services/posts-service */ \"./src/scripts/services/posts-service.ts\");\r\nvar routing_1 = __webpack_require__(/*! ../routing */ \"./src/scripts/routing.ts\");\r\nfunction renderPost(post) {\r\n    var $post = document.createElement('div');\r\n    var template = \"\\n        <div class=\\\"card mb-3\\\">\\n            <div class=\\\"card-body post-content\\\">\\n                <p class=\\\"card-text post-body\\\">\" + post.body + \"</p>\\n                <button class=\\\"btn btn-warning edit\\\">edytuj wpis</button>\\n                <button class=\\\"btn btn-danger del\\\">usu\\u0144 wpis</button>\\n            </div>\\n            <div class=\\\"card-footer comments\\\"></div>\\n        </div>\";\r\n    $post.innerHTML = template;\r\n    var $editBtn = $post.querySelector('.edit');\r\n    var isEditEnabled = false;\r\n    $editBtn.addEventListener('click', function () {\r\n        if (isEditEnabled) {\r\n            isEditEnabled = false;\r\n            saveEditPostForm(post, $post);\r\n        }\r\n        else {\r\n            isEditEnabled = true;\r\n            renderEditPostForm(post, $post);\r\n        }\r\n    });\r\n    var $btnDel = $post.querySelector('.del');\r\n    $btnDel.addEventListener('click', function () {\r\n        var id = post.id;\r\n        confirm_deletion_popup_component_1.renderConfirmDeletionPopup(function () {\r\n            $post.remove();\r\n            posts_service_1.removePost(id);\r\n            routing_1.redirectToHomePage();\r\n        });\r\n    });\r\n    var $posts = document.querySelector('.posts');\r\n    $posts.insertBefore($post, $posts.firstElementChild);\r\n    displayNumberComments(post.comments, $post);\r\n    displayDate(post, $post);\r\n    return $post;\r\n}\r\nexports.renderPost = renderPost;\r\nfunction saveEditPostForm(post, $post) {\r\n    var $textarea = $post.querySelector('.post-body-edit');\r\n    post.body = $textarea.value;\r\n    $textarea.remove();\r\n    var $postBody = $post.querySelector('.post-body');\r\n    $postBody.textContent = post.body;\r\n    $postBody.classList.remove('hidden');\r\n    posts_service_1.editPost(post);\r\n}\r\nfunction renderEditPostForm(post, $post) {\r\n    var $postContent = $post.querySelector('.post-content');\r\n    var $postBody = $post.querySelector('.post-body');\r\n    $postBody.classList.add('hidden');\r\n    var $textarea = document.createElement('textarea');\r\n    $textarea.classList.add('post-body-edit');\r\n    $textarea.value = post.body;\r\n    $postContent.insertBefore($textarea, $postBody);\r\n}\r\nfunction displayNumberComments(comments, $post) {\r\n    var $div = document.createElement('div');\r\n    var template = \"\\n        <div class=\\\"d-flex justify-content-end comments-number\\\">\\n            <p class=\\\"mt-3 mb-0\\\">\" + comments.length + \" \" + setCorrectFormComment(comments) + \"</p>\\n        </div>\";\r\n    $div.innerHTML = template;\r\n    var $postContent = $post.querySelector('.post-content');\r\n    $postContent.appendChild($div);\r\n}\r\nfunction setCorrectFormComment(comments) {\r\n    if (comments.length === 1) {\r\n        return 'komentarz';\r\n    }\r\n    else if (comments.length >= 5 || comments.length === 0) {\r\n        return 'komentarzy';\r\n    }\r\n    else {\r\n        return 'komentarze';\r\n    }\r\n}\r\nfunction displayDate(post, $post) {\r\n    var $div = document.createElement('div');\r\n    $div.classList.add('date');\r\n    var date1 = displayDate3(post);\r\n    var date2 = displayDate2(post);\r\n    var template = \"\\n        <a href=\\\"#/posts/\" + post.id + \"\\\">\" + date1 + \" \" + date2 + \"</a>\\n    \";\r\n    $div.innerHTML = template;\r\n    var $postContent = $post.querySelector('.post-content');\r\n    $postContent.prepend($div);\r\n}\r\nfunction displayMonthName(monthNumber) {\r\n    var monthArray = [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"];\r\n    return monthArray[monthNumber];\r\n}\r\nfunction displayDate3(post) {\r\n    var date = new Date(post.date);\r\n    return date.toLocaleString('pl-pl', { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' });\r\n}\r\nfunction displayDate2(post) {\r\n    var date = new Date(post.date);\r\n    var dayNumber = date.getDate();\r\n    var monthNumber = date.getMonth();\r\n    var monthName = displayMonthName(monthNumber);\r\n    var time = date.getHours() + \":\" + date.getMinutes();\r\n    return dayNumber + \" \" + monthName + \" \" + time;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/scripts/components/post-component.ts?");

/***/ }),

/***/ "./src/scripts/components/post-panel-component.ts":
/*!********************************************************!*\
  !*** ./src/scripts/components/post-panel-component.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.renderPostPanel = void 0;\r\nvar post_component_1 = __webpack_require__(/*! ../components/post-component */ \"./src/scripts/components/post-component.ts\");\r\nvar add_comment_form_component_1 = __webpack_require__(/*! ../components/add-comment-form-component */ \"./src/scripts/components/add-comment-form-component.ts\");\r\nvar comment_component_1 = __webpack_require__(/*! ../components/comment-component */ \"./src/scripts/components/comment-component.ts\");\r\nvar posts_service_1 = __webpack_require__(/*! ../services/posts-service */ \"./src/scripts/services/posts-service.ts\");\r\nfunction renderPostPanel(post) {\r\n    var $post = post_component_1.renderPost(post);\r\n    add_comment_form_component_1.renderAddCommentForm(post, $post, function (comment) {\r\n        post.comments.push(comment);\r\n        var $ul = $post.querySelector('.comments ul');\r\n        comment_component_1.renderComment($ul, post, comment, function ($comment) {\r\n            comment_component_1.removeComment(post, comment, $comment);\r\n        });\r\n        posts_service_1.editPost(post);\r\n    });\r\n    comment_component_1.renderComments(post, $post);\r\n}\r\nexports.renderPostPanel = renderPostPanel;\r\n\n\n//# sourceURL=webpack:///./src/scripts/components/post-panel-component.ts?");

/***/ }),

/***/ "./src/scripts/components/posts-component.ts":
/*!***************************************************!*\
  !*** ./src/scripts/components/posts-component.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.renderPosts = void 0;\r\nvar post_panel_component_1 = __webpack_require__(/*! ../components/post-panel-component */ \"./src/scripts/components/post-panel-component.ts\");\r\nvar add_post_form_component_1 = __webpack_require__(/*! ../components/add-post-form-component */ \"./src/scripts/components/add-post-form-component.ts\");\r\nvar posts_service_1 = __webpack_require__(/*! ../services/posts-service */ \"./src/scripts/services/posts-service.ts\");\r\nfunction renderPosts(posts) {\r\n    posts.forEach(post_panel_component_1.renderPostPanel);\r\n    add_post_form_component_1.renderAddPostForm(function (post) {\r\n        post_panel_component_1.renderPostPanel(post);\r\n        posts_service_1.savePost(post);\r\n    });\r\n}\r\nexports.renderPosts = renderPosts;\r\n\n\n//# sourceURL=webpack:///./src/scripts/components/posts-component.ts?");

/***/ }),

/***/ "./src/scripts/config.ts":
/*!*******************************!*\
  !*** ./src/scripts/config.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CONFIG = void 0;\r\nvar CONFIG = {\r\n    postsUrl: 'http://localhost:3000/posts'\r\n};\r\nexports.CONFIG = CONFIG;\r\n\n\n//# sourceURL=webpack:///./src/scripts/config.ts?");

/***/ }),

/***/ "./src/scripts/helpers/page-helper.ts":
/*!********************************************!*\
  !*** ./src/scripts/helpers/page-helper.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.renderPage = void 0;\r\n//wzorzec kompozycja\r\nfunction renderPage(template) {\r\n    var outlet = document.querySelector('.outlet');\r\n    outlet.innerHTML = template;\r\n}\r\nexports.renderPage = renderPage;\r\n\n\n//# sourceURL=webpack:///./src/scripts/helpers/page-helper.ts?");

/***/ }),

/***/ "./src/scripts/main.ts":
/*!*****************************!*\
  !*** ./src/scripts/main.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__webpack_require__(/*! ../styles/style.css */ \"./src/styles/style.css\");\r\n__webpack_require__(/*! ../index.html */ \"./src/index.html\");\r\n__webpack_require__(/*! ../404.html */ \"./src/404.html\");\r\nvar routing_1 = __webpack_require__(/*! ./routing */ \"./src/scripts/routing.ts\");\r\ndocument.addEventListener('DOMContentLoaded', main);\r\nwindow.addEventListener('hashchange', onHashChange);\r\nfunction main() {\r\n    var status = routing_1.isHomePage();\r\n    if (status) {\r\n        routing_1.redirectToHomePage();\r\n    }\r\n    else {\r\n        routing_1.routing(routing_1.routes);\r\n    }\r\n}\r\nfunction onHashChange() {\r\n    routing_1.routing(routing_1.routes);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/scripts/main.ts?");

/***/ }),

/***/ "./src/scripts/pages/home-page.ts":
/*!****************************************!*\
  !*** ./src/scripts/pages/home-page.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.renderHomePage = void 0;\r\nvar page_helper_1 = __webpack_require__(/*! ../helpers/page-helper */ \"./src/scripts/helpers/page-helper.ts\");\r\nvar posts_component_1 = __webpack_require__(/*! ../components/posts-component */ \"./src/scripts/components/posts-component.ts\");\r\nvar error_message_component_1 = __webpack_require__(/*! ../components/error-message-component */ \"./src/scripts/components/error-message-component.ts\");\r\nvar posts_service_1 = __webpack_require__(/*! ../services/posts-service */ \"./src/scripts/services/posts-service.ts\");\r\nfunction renderHomePage() {\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        var template, posts, _a;\r\n        return __generator(this, function (_b) {\r\n            switch (_b.label) {\r\n                case 0:\r\n                    template = \"\\n        <div class=\\\"add-post\\\"></div>\\n        <div class=\\\"posts\\\"></div>\";\r\n                    page_helper_1.renderPage(template);\r\n                    _b.label = 1;\r\n                case 1:\r\n                    _b.trys.push([1, 3, , 4]);\r\n                    return [4 /*yield*/, posts_service_1.fetchPosts()];\r\n                case 2:\r\n                    posts = _b.sent();\r\n                    posts_component_1.renderPosts(posts);\r\n                    return [3 /*break*/, 4];\r\n                case 3:\r\n                    _a = _b.sent();\r\n                    error_message_component_1.displayError();\r\n                    return [3 /*break*/, 4];\r\n                case 4: return [2 /*return*/];\r\n            }\r\n        });\r\n    });\r\n}\r\nexports.renderHomePage = renderHomePage;\r\n\n\n//# sourceURL=webpack:///./src/scripts/pages/home-page.ts?");

/***/ }),

/***/ "./src/scripts/pages/not-found-page.ts":
/*!*********************************************!*\
  !*** ./src/scripts/pages/not-found-page.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.renderNotFoundPage = void 0;\r\nvar page_helper_1 = __webpack_require__(/*! ../helpers/page-helper */ \"./src/scripts/helpers/page-helper.ts\");\r\nfunction renderNotFoundPage() {\r\n    var template = \"\\n        <p>Strona nie odnaleziona</p>\";\r\n    page_helper_1.renderPage(template);\r\n}\r\nexports.renderNotFoundPage = renderNotFoundPage;\r\n\n\n//# sourceURL=webpack:///./src/scripts/pages/not-found-page.ts?");

/***/ }),

/***/ "./src/scripts/pages/post-page.ts":
/*!****************************************!*\
  !*** ./src/scripts/pages/post-page.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.renderPostPage = void 0;\r\nvar page_helper_1 = __webpack_require__(/*! ../helpers/page-helper */ \"./src/scripts/helpers/page-helper.ts\");\r\nvar posts_service_1 = __webpack_require__(/*! ../services/posts-service */ \"./src/scripts/services/posts-service.ts\");\r\nvar post_panel_component_1 = __webpack_require__(/*! ../components/post-panel-component */ \"./src/scripts/components/post-panel-component.ts\");\r\nvar error_message_component_1 = __webpack_require__(/*! ../components/error-message-component */ \"./src/scripts/components/error-message-component.ts\");\r\nfunction renderPostPage(_a) {\r\n    var postId = _a.postId;\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        var template, post, _b, message;\r\n        return __generator(this, function (_c) {\r\n            switch (_c.label) {\r\n                case 0:\r\n                    template = \"\\n        <div class=\\\"posts\\\"></div>\";\r\n                    page_helper_1.renderPage(template);\r\n                    _c.label = 1;\r\n                case 1:\r\n                    _c.trys.push([1, 3, , 4]);\r\n                    return [4 /*yield*/, posts_service_1.fetchPost(postId)];\r\n                case 2:\r\n                    post = _c.sent();\r\n                    post_panel_component_1.renderPostPanel(post);\r\n                    return [3 /*break*/, 4];\r\n                case 3:\r\n                    _b = _c.sent();\r\n                    message = 'Prezentacja posta się nie powiodła';\r\n                    error_message_component_1.displayError(message);\r\n                    return [3 /*break*/, 4];\r\n                case 4: return [2 /*return*/];\r\n            }\r\n        });\r\n    });\r\n}\r\nexports.renderPostPage = renderPostPage;\r\n\n\n//# sourceURL=webpack:///./src/scripts/pages/post-page.ts?");

/***/ }),

/***/ "./src/scripts/routing.ts":
/*!********************************!*\
  !*** ./src/scripts/routing.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.routes = exports.routing = exports.redirectNotFoundPage = exports.redirectToHomePage = exports.isHomePage = void 0;\r\nvar home_page_1 = __webpack_require__(/*! ./pages/home-page */ \"./src/scripts/pages/home-page.ts\");\r\nvar post_page_1 = __webpack_require__(/*! ./pages/post-page */ \"./src/scripts/pages/post-page.ts\");\r\nvar not_found_page_1 = __webpack_require__(/*! ./pages/not-found-page */ \"./src/scripts/pages/not-found-page.ts\");\r\nvar routes = [\r\n    { path: '/', handler: home_page_1.renderHomePage },\r\n    { path: '/posts/:postId', handler: post_page_1.renderPostPage },\r\n    { path: '/not-found', handler: not_found_page_1.renderNotFoundPage }\r\n];\r\nexports.routes = routes;\r\nfunction isHomePage() {\r\n    return (location.hash === '');\r\n}\r\nexports.isHomePage = isHomePage;\r\nfunction redirectToHomePage() {\r\n    location.hash = '/';\r\n}\r\nexports.redirectToHomePage = redirectToHomePage;\r\nfunction redirectNotFoundPage() {\r\n    location.hash = '/not-found';\r\n}\r\nexports.redirectNotFoundPage = redirectNotFoundPage;\r\n/**\r\n * @example\r\n * getUrlParams('/posts/234876', '/posts/:postId') => { postId: 234876 }\r\n * getUrlParams('/posts/234876/hello-world', '/posts/:postId/:name') => { postId: 234876, name: 'hello-world' }\r\n */\r\nfunction getUrlParams(path, route) {\r\n    var pathParts = path.split('/');\r\n    var routeParts = route.split('/');\r\n    var result = {};\r\n    for (var i = 0; i < routeParts.length; i++) {\r\n        var paramName = routeParts[i];\r\n        var paramValue = pathParts[i];\r\n        if (routeParts[i].startsWith(':')) {\r\n            result[paramName.slice(1)] = paramValue;\r\n        }\r\n    }\r\n    return result;\r\n}\r\n/**\r\n * @example\r\n * isMatch('/', '/') => true\r\n * isMatch('/', '/q') => false\r\n * isMatch('/posts/234876', '/posts/:postId') => true\r\n * isMatch('/posts/khjb234', '/posts/:postId') => true\r\n * isMatch('/not-found', '/:any') => true\r\n * isMatch('/', '/:q') => true\r\n * isMatch('/posts/', '/posts/:postId') => true\r\n * isMatch('/', '/posts/:postId') => false\r\n * isMatch('/bleble', '/posts/:postId') => false\r\n */\r\nfunction isMatch(path, route) {\r\n    var pathParts = path.split('/');\r\n    var routeParts = route.split('/');\r\n    for (var i = 0; i < routeParts.length; i++) {\r\n        if (routeParts[i].startsWith(':')) {\r\n            continue;\r\n        }\r\n        if (routeParts[i] === pathParts[i]) {\r\n            continue;\r\n        }\r\n        return false;\r\n    }\r\n    return true;\r\n}\r\n/**\r\n * @typedef Route\r\n * @property path {string}\r\n * @property handler {Function}\r\n */\r\n/**\r\n * @param routes {Array<Route>} — Tablica routingu\r\n *\r\n * [\r\n *   { path: '/posts/:id', handler: Function1 },\r\n *   { path: '/', handler: Function2 },\r\n * ]\r\n */\r\nfunction routing(routes) {\r\n    // 1. Pobieramy aktualną ścieżkę z adresu URL\r\n    var pathname = location.hash.slice(1);\r\n    for (var i = 0; i < routes.length; i++) {\r\n        var route = routes[i];\r\n        var status_1 = isMatch(pathname, route.path);\r\n        // 2. W pętli spr. czy obsługujemy daną ścieżkę\r\n        if (status_1) {\r\n            var params = getUrlParams(pathname, route.path);\r\n            // 3. Jeśli obsługujemy to uruchamiamy handler()\r\n            route.handler(params);\r\n            return;\r\n        }\r\n    }\r\n    redirectNotFoundPage();\r\n}\r\nexports.routing = routing;\r\n\n\n//# sourceURL=webpack:///./src/scripts/routing.ts?");

/***/ }),

/***/ "./src/scripts/services/posts-service.ts":
/*!***********************************************!*\
  !*** ./src/scripts/services/posts-service.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.editPost = exports.removePost = exports.savePost = exports.fetchPost = exports.fetchPosts = void 0;\r\nvar config_1 = __webpack_require__(/*! ../config */ \"./src/scripts/config.ts\");\r\nfunction fetchPosts() {\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        var url, response, posts;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0:\r\n                    url = config_1.CONFIG.postsUrl;\r\n                    return [4 /*yield*/, fetch(url)];\r\n                case 1:\r\n                    response = _a.sent();\r\n                    return [4 /*yield*/, response.json()];\r\n                case 2:\r\n                    posts = _a.sent();\r\n                    return [2 /*return*/, posts];\r\n            }\r\n        });\r\n    });\r\n}\r\nexports.fetchPosts = fetchPosts;\r\nfunction fetchPost(id) {\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        var url, response, post;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0:\r\n                    url = config_1.CONFIG.postsUrl + \"/\" + id;\r\n                    return [4 /*yield*/, fetch(url)];\r\n                case 1:\r\n                    response = _a.sent();\r\n                    return [4 /*yield*/, response.json()];\r\n                case 2:\r\n                    post = _a.sent();\r\n                    return [2 /*return*/, post];\r\n            }\r\n        });\r\n    });\r\n}\r\nexports.fetchPost = fetchPost;\r\nfunction savePost(post) {\r\n    var url = config_1.CONFIG.postsUrl;\r\n    var body = JSON.stringify(post);\r\n    fetch(url, {\r\n        headers: {\r\n            \"Content-Type\": \"application/json\"\r\n        },\r\n        method: \"post\",\r\n        body: body\r\n    });\r\n}\r\nexports.savePost = savePost;\r\nfunction removePost(id) {\r\n    var url = config_1.CONFIG.postsUrl + \"/\" + id;\r\n    fetch(url, {\r\n        method: \"delete\"\r\n    });\r\n}\r\nexports.removePost = removePost;\r\nfunction editPost(post) {\r\n    var url = config_1.CONFIG.postsUrl + \"/\" + post.id;\r\n    var body = JSON.stringify(post);\r\n    fetch(url, {\r\n        headers: {\r\n            'Content-Type': 'application/json'\r\n        },\r\n        method: \"PATCH\",\r\n        body: body\r\n    });\r\n}\r\nexports.editPost = editPost;\r\n\n\n//# sourceURL=webpack:///./src/scripts/services/posts-service.ts?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/style.css?");

/***/ })

/******/ });