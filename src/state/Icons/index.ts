import { selector } from 'recoil'

const iconNames = [
    'heart'
] as const

function getSVGElement(src: string): Promise<SVGElement> {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(src)
            const blob = await response.blob()
            const reader = new FileReader()

            reader.addEventListener('loadend', () => {
                try {
                    const base64 = reader.result as string
                    const decoded = atob(base64.split('base64,')[1])
                    const parser = new DOMParser()
                    const localDocument = parser.parseFromString(decoded, "image/svg+xml")
                    const SVG = localDocument.querySelector('svg')

                    resolve(SVG)
                } catch (error) {
                    reject(error)
                }
            })
            reader.addEventListener('error', reject)
            reader.readAsDataURL(blob as any)
        } catch (error) {
            reject(error)
        }
    })
}

export default selector({
    key: 'Icons',
    get: async () => {
        const SVGGroup = {}

        for (const iconName of iconNames) {
            const SVG = await getSVGElement(`../../icons/${iconName}.svg`)

            SVGGroup[iconName] = SVG.outerHTML
        }

        return SVGGroup
    }
})