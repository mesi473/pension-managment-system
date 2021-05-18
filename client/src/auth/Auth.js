

class Auth{
    constructor(){
        this.isAuthenticated=false
    }
    login(cb){
        cb();
        this.isAuthenticated=true
    }
    logOut(cb){
        this.isAuthenticated=false;
        cb();
    }
    isAuthenticated(){
        return this.isAuthenticated;
    }

}
export default new Auth();