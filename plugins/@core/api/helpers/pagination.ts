export const pagination = (pageStr: string, takeStr: string = "20") => {
    let page = parseInt(pageStr) - 1;
    const take = Math.min(parseInt(takeStr), 100) || 20;

    return {
        skip: take * page,
        take,
    };
};

export default pagination