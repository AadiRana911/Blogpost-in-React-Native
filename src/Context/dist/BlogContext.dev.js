"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Provider = exports.Context = void 0;

var _createDataContext2 = _interopRequireDefault(require("./createDataContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var blogReducer = function blogReducer(state, action) {
  switch (action.type) {
    case 'add_blogPost':
      console.log(action.payload.title);
      return [].concat(_toConsumableArray(state), [{
        id: Math.floor(Math.random() * 9999999999),
        title: action.payload.title,
        content: action.payload.content
      }]);

    case 'delete_blogPost':
      return state.filter(function (blogPost) {
        return blogPost.id !== action.payload;
      });

    default:
      return state;
  }
};

var addBlogPost = function addBlogPost(dispatch) {
  return function (title, content, callback) {
    dispatch({
      type: 'add_blogPost',
      payload: {
        title: title,
        content: content
      }
    });
    callback();
  };
};

var deleteBlogPost = function deleteBlogPost(dispatch) {
  return function (id) {
    dispatch({
      type: 'delete_blogPost',
      payload: id
    });
  };
};

var _createDataContext = (0, _createDataContext2["default"])(blogReducer, {
  addBlogPost: addBlogPost,
  deleteBlogPost: deleteBlogPost
}, []),
    Context = _createDataContext.Context,
    Provider = _createDataContext.Provider;

exports.Provider = Provider;
exports.Context = Context;