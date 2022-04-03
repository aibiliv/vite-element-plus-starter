//把驼峰转化成羊肉串
export const toLine = (value: string) => {
    return value.replace(/(A-Z)/g, '-$1').toLocaleLowerCase()
}