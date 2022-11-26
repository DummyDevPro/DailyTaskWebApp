const postMethod = async function (url, body, method) {
    const response = await fetch(url, {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: body,
    });

    return response;
}