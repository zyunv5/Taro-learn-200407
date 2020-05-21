import { combineReducers } from "redux";
import {
  GET_LIST,
  CHANGE_TABBAR,
  SEARCH_KEY_WORDS,
  SHOW_DIALOG,
  HIDE_DIALOG,
} from "./constants";

//tabar更改路由
const initRouter = 0;
function routerSelect(state = initRouter, action) {
  switch (action.type) {
    case CHANGE_TABBAR:
      return action.bool;
    default:
      return state;
  }
}

//显示登录框
const defaultDialog = false;
function changeDialog(state = defaultDialog, action) {
  switch (action.type) {
    case SHOW_DIALOG:
      return action.data;
    case HIDE_DIALOG:
      return action.data;
    default:
      return state;
  }
}

//index和mine获取列表数据
const initList = [];
function list(state = initList, action) {
  switch (action.type) {
    case GET_LIST:
      return [...action.data];
    default:
      return state;
  }
}

//index页面的模糊搜索
const initSearch = "";
function searchKeyWords(state = initSearch, action) {
  switch (action.type) {
    case SEARCH_KEY_WORDS:
      return [...action.data];
    default:
      return state;
  }
}

export default combineReducers({
  list,
  routerSelect,
  searchKeyWords,
  changeDialog,
});
