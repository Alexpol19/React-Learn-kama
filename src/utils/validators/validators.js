export const requiredField = value => {
    if(!value){
        return 'Required Field';
    }
    else {
        return undefined
    }
}

// export const minLength = value =>
// value && value.length < 5 ? `Must be ${5} characters or more` : undefined

export const minLength = min => value => {
    if(value && value.length < min){
        return `Need min ${min} symbols`;
    }
    return undefined;
}

// export const minLength5 = minLength(5)