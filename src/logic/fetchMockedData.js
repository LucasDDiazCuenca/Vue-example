export default async function fechtMockedData() {

    const response = await fetch("https://run.mocky.io/v3/37b71c8a-54ca-4050-8e82-11f9078b7786");
    const _response = await response.json();

    const mockedData1 = _response.data.toSpliced(0, 13)
    const mockedData2 = _response.data.toSpliced(7, 13)

    return [mockedData1, mockedData2]
}