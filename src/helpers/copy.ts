import {Ref} from "vue";

export async function copy(value: string | undefined, ref: Ref<boolean>) {
    if(value === undefined) {
        return;
    }

    await navigator.clipboard.writeText(value);

    ref.value = true;

    setTimeout(() => {
        ref.value = false;
    }, 2000)
}
