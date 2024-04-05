const url = 'http://element.thexxdd.cn/api'

const urls = class  {
    static m() {
        const register = `${url}/register`
        const login = `${url}/login`
        return{
            register,
            login
        }
    }

}

export default urls