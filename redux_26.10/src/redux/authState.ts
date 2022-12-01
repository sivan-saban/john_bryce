import jwt_decode from "jwt-decode";
// הגדרת מבנה של ה STATE הקבוע
export enum userRole{"Admin","Company", "Customer","Guest"}
export class authState{
    userName:string="Sivani";
    //userPassword:string="";
    userRole:userRole=userRole.Guest;
    userToken:string="";
}

//הגדרה של פעולות קבועות
export enum authActionType{
    userLogin="userLogin",
    userLogout="userLogout",
    updateToken="updateToken",
};
export interface authAction{
    type: authActionType;
    payload ?: any;
};

//dispatch עידכון המידע עי פונקציות לפי מטרתן
//בכולם הפונקציות מקבלות דבר אחת ושולחות אוביקט
export function userLogin(token:string):authAction{
    return {type:authActionType.userLogin, payload:token};
};
export function userLogout():authAction{
    return {type:authActionType.userLogout, payload:null};
};
export function updateToken(token:string):authAction{
    return {type:authActionType.updateToken, payload:token};
}

//פונקציית רדיוסר
//פונקציית רדיוסר מקבלת את המידע הנוכחי ואת אוביקט הפעולה 
//ושולחת דבר אחד את המידע העדכני החדש
//הרדיוסרר בודק איזו פעולה הגיעה אליו ועם הסוויטטש הוא מבצע פעולות בהתאמה למידע ושולחת מידע חדש
export function authReducer(
    currentState:authState=new authState() ,
    action:authAction):authState{
        const newState = {...currentState};
switch(action.type){
    case authActionType.userLogin:
        //שמירת התוקן מהשרת ללא קידומת
        var myToken = action.payload.replace("Bearer ","");
        //המרת התוקן מאוביקט לסטרינג
        var decoded = JSON.parse(JSON.stringify(jwt_decode(myToken))); 
        break;
    case authActionType.userLogout:
        newState.userName = "Guest";
        newState.userRole = userRole.Guest;
        newState.userToken = "";
                break;
    case authActionType.updateToken:
        newState.userToken = action.payload;
        break;
}

return newState;
}