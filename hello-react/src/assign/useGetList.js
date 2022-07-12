const createItem = function (index, title) {
    return {
        id : index,
        title : `${title} ${index}`
    }
}

export default function useGetList(createLength,titleName) {
    const element = []
    for (let i = 0; i < createLength; i++) {
        element.push(createItem(i,titleName))
    }

    return element;
}