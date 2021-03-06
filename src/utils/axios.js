import axios from "axios";
import {localGet} from './index'

axios.defaults.baseURL = "https://www.fastmock.site/mock/961f5366e49b46ec8b9d6f0b4be1e6ff/vuejd";
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers['token'] = localGet('token')||'';
axios.defaults.headers.post['Content-Type'] = "application/json";
axios.defaults.timeout = 10000;

export default axios