export interface IUserDetailsProps{
    firstName:string;
    lastName:string;
    picture?:Blob;
    email:string;
}

export interface ILoginDetailsProps{
    permissionLevel:string;
    authToken:string;
    user:IUserDetailsProps;
}