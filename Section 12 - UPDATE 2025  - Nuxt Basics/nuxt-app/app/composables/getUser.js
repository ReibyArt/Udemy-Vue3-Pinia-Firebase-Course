
import { ref } from "vue";

export const getUser = (args) => {

    const loader = ref(false);
    const names = ref(['Reiby', 'Art', 'Games', 'You', 'Tube', 'And'])
    const getName = () => {
        loader.value = true;
        setTimeout(() => {
            names.value.push(args);
            loader.value = false;
        }, 2000)
    }
    return {loader, names, getName}
}