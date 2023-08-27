export {}
declare global{
    declare const APP_VERSION: string
    interface Data{
        title: string,
        desc: string,
        genre: string
    }
    interface DeleteProps{
        delete :number 
      }
      interface GetMoviestype {
        id: number,
        title: string,
        desc?: string,
        genre?: string
      }
      interface postMoviesData {
        title?: string,
        desc?: string,
        genre?: string
    }
    interface RegisterDataType {
        email: string,
        firstName: string,
        lastname: string,
        age: number,
        password: string,
    }
    interface LoginDataType {
        email: string,
        password: string,
    }
    //////////////////redux

    interface ServerResponse<T> {
        accessToken: string,
        user: object
        status: string
        message: string
        data: T
     }
     
     interface loginSuccessData {
        accessToken: string,
        user: object
     }
     
     type loginSuccessResponse = ServerResponse<loginSuccessData>
     
     
     interface Reduxtype{
        token: object,
        user: object,
        pending: boolean,
        rejected: boolean,
        success: boolean,
        islogin: boolean
     }
     
     const initialState:Reduxtype = {
        token: {},
        user: {},
        pending: false,
        rejected: false,
        success: false,
        islogin: false
     }
     /////////////////////

}