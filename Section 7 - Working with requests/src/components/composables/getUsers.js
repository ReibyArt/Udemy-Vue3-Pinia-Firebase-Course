import axios from 'axios';
import { toast } from 'vue3-toastify';
import { reactive } from 'vue';


const getUsers = () => {

    const data = reactive({
    loading: true,
    users: []
})

const loadUsers = async() => {
    try
    {
        const response = await axios.get('http://localhost:3004/users');
        data.users = response.data;
        data.loading = false;   
    }
    catch(errors)
    {
        toast.error('Sorry something wrong!!!');
    } 
}

    return{data, loadUsers}
}

export default getUsers;