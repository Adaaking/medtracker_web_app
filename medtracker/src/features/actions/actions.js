import * as type from '../types'



export const userLogin = (user) => {
    return {
        type:type.USER_LOGIN,
        payload:user
    }
}

///allergees
export const allergies = (id) => {
    return {
        type: type.GET_ALLERGIES,
        payload:id
    }
}

////////

export const medicinies = (id) => {
    return {
        type: type.GET_MEDICINIES,
        payload:id
    }
}


export const addMedicinies = (medicine) => {
    
    return {
        type: type.ADD_MEDICINIES,
        payload:medicine
    }
}

export const deleteMedicine = (id) => {
    console.log('id.....',id)
    return {
        type: type.DELETE_MEDICINIES,
        payload:id
    }
}

export const addAllergies = ( allergy) => {
    console.log(allergy)
    return {
        type:type.ADD_ALLERGIES,
        payload:allergy
    }
}



export const deleteAllergy = (id) => {
    console.log('id.....',id)
    return {
        type: type.DELETE_ALLERGIES,
        payload:id
    }
}


export const createDocument = ( document ) => {
    return {
        type:type.ADD_DOCUMENT,
        payload:document
    }
}

export const getDocument = (id) => {
    console.log(id)
    return {
        type:type.GET_DOCUMENT,
        payload:id
    }
}

export const deleteDocument = (id) => {
    return {
        type: type.DELETE_DOCUMENT,
        payload:id
    }
}


///////diagnosis
export const updateId = (id) => {
    return {
        type: type.UPDATE_ID,
        payload:id
    }
}

//// diagnosos
export const diagnosis = () => {
    return {
        type: type.GET_DIAGNOSIS,
    }
}

export const deleteDiagnosies = (id) => {
    return {
        type: type.DELETE_DIAGNOSIS,
        payload:id
    }
}

///medicine
export const medicine = () => {
    return {
        type: type.GET_ALLERGIES,
    }
}



///vaccine
export const vaccine = () => {
    return {
        type: type.GET_ALLERGIES,
    }
}

export const deleteVaccine = (id) => {
    return {
        type: type.GET_ALLERGIES,
        payload:id
    }
}


