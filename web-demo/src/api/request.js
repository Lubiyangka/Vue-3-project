import axios from "axios";
import instance from "@/api/header";

const request = class {
    static url;
    static arg;

    constructor(url, arg) {
        this.url = url
        this.arg = arg
    }

    modePost() {
        return new Promise((resolve, reject) => {
            instance.post((this.url), this.arg)
                .then(res => {
                    resolve(res)
                }).catch(err => {
                reject(err)
            })
        })
    }

    modeGet() {
        return new Promise((resolve, reject) => {
            instance.get((this.url))
                .then(res => {
                    resolve(res)
                }).catch(err => {
                reject(err)
            })
        })
    }
}

export default request
