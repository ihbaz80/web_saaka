import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export const RGBColorReader = (props:{location: string, point: string, pointX: number, pointY:number}) => {
    const [color, setColor] = useState({r:0,g:0,b:0});

    const getRGBFromImage = (url:string, x:number, y:number) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = "Anonymous"; // To avoid CORS issues
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                if (!ctx) {
                    reject(new Error('Canvas context is not supported'));
                    return;
                }
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
                const pixelData = ctx.getImageData(x, y, 1, 1).data;
                const color = {
                    r: pixelData[0],
                    g: pixelData[1],
                    b: pixelData[2]
                };
                resolve(color);
            };
            img.onerror = () => reject(new Error('Failed to load image'));
            img.src = url;
        });
    }

    useEffect(() => {
        const imageUrl = 'https://www.met.gov.my/data/radar_peninsular.gif'; // URL of the image
       // const coordinateX = 458; // X-coordinate of the pixel
       // const coordinateY = 400; // Y-coordinate of the pixel

        const fetchRGBColor = () => {
            getRGBFromImage(imageUrl, props.pointX, props.pointY)
                .then(async(colors:any) => {
                    setColor(colors);
                    const data = {
                        location: props.location,
                        point: props.point,
                        pointX: props.pointX,
                        pointY: props.pointY,
                        red: colors.r,
                        green: colors.g,
                        blue: colors.b
                    }
                   // await Axios.post(`http://localhost:3001/datalog`, data, {headers: {'content-type': 'application/x-www-form-urlencoded'}})
                    await Axios.post(`https://api.saakajohor.com/datalog`, data, {headers: {'content-type': 'application/x-www-form-urlencoded'}})
                    console.log("RGB Color: ", colors)
                })
                .catch((error) => {
                    console.error('Error occurred while getting RGB color:', error);
                });
        };

        // Initial fetch
        fetchRGBColor();

        // Schedule fetch every 30 minutes
        const intervalId = setInterval(fetchRGBColor, 5 * 60 * 1000);

        // Clean-up function to clear the interval
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            {/* <h2>RGB Color:</h2>
            {color && (
                <div>
                    <p>Red: {color.r}</p>
                    <p>Green: {color.g}</p>
                    <p>Blue: {color.b}</p>
                </div>
            )} */}
        </div>
    );
};

export default RGBColorReader;
