import {useState, useEffect} from 'react';
// Ligeramente inspirado del proyecto semana 5.
async function useFetch(API) {
    let data = null;
    let loading = true;
    let error = null;
    if (!API) return;
    try {
        loading = true;
        const response = await fetch(API);
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        data = await response.json();
    }
    catch (Err) {
        error = "Error:" +Err;
    }
    finally {
        loading = false;
    }
    return (data, loading, error);
}