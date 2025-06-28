import axios from 'axios';
import { toast } from 'vue3-toastify';
import { ref } from 'vue';

const postUser = (user) => {
    
    const loading = ref(false);

    const addUser = () => {
        loading.value = true;
        axios({
            method: 'POST',
            url: 'http://localhost:3004/users',
            data: user,
        })
        .then(() => {
            toast.success('New User is Added!');
        })
        .catch(() => {
            toast.error('Sorry! Something wrong! Try again or later');
        })
        .finally(()=>{
            loading.value = false;
        })
    }

    return { loading, addUser }
}

export default postUser;