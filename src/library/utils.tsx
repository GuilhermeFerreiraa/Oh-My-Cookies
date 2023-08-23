'use client'

function svgToUrl(svg: string): string {
 const blob = new Blob([svg], { type: 'image/svg+xml' });
 const url = URL.createObjectURL(blob);
 return url;
}

export {
 svgToUrl,
}