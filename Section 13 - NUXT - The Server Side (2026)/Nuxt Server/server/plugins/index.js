import { getEmployees } from "../utils";

export default defineNitroPlugin((nitroApp)=>{
    console.log('Hello Nitro Plugin!');
    nitroApp.hooks.hook('request', async(event)=>{
        // console.log('Run on request!');
        try{ 
            const result = getEmployees(); // Function from Utils
            event.context.employeeList = result;
        } catch(error) {
            console.log(error);
        }
    })

    nitroApp.hooks.hook('beforeResponse', (event)=>{
        console.log('Run before Response!');
    })

    nitroApp.hooks.hook('afterResponse', (event)=>{
        console.log('Run afterResponse!');
    })

    nitroApp.hooks.hook('error', (event)=>{
        console.log('Run on error!');
    })
})