// import { useState, useEffect } from "react";


// let progress = 50;
// let startX = 0;
// let active = 0;
// let isDown = false;


// const speedWheel = 0.02;
// const speedDrag = -0.1;


// const getZindex = (array: Element[], index: number) =>
//   array.map((_, i) =>
//     index === i ? array.length : array.length - Math.abs(index - i)
//   );


// const displayItems = (item: HTMLElement, index: number, active: number) => {
//   const zIndex = getZindex([...$items], active)[index];
//   item.style.setProperty("--zIndex", zIndex.toString());
//   item.style.setProperty(
//     "--active",
//     ((index - active) / $items.length).toString()
//   );
// };

// const handleMouseMove = (e: MouseEvent | TouchEvent) => {
//   if (e.type === "mousemove") {
//     $cursors.forEach(($cursor) => {
//       $cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
//     });
//   }
//   if (!isDown) return;
//   const x =
//     e.clientX || (e.touches && e.touches[0] && e.touches[0].clientX) || 0;
//   const mouseProgress = (x - startX) * speedDrag;
//   progress = progress + mouseProgress;
//   startX = x;
//   animate();
// };


// const animate = () => {
//   progress = Math.max(0, Math.min(progress, 100));
//   active = Math.floor((progress / 100) * ($items.length - 1));

//   $items.forEach((item, index) => displayItems(item, index, active));
// };

// const addEventListeners = () => {
//   document.addEventListener("mousewheel", handleWheel);
//   document.addEventListener("mousedown", handleMouseDown);
//   document.addEventListener("mousemove", handleMouseMove);
//   document.addEventListener("mouseup", handleMouseUp);
//   document.addEventListener("touchstart", handleMouseDown);
//   document.addEventListener("touchmove", handleMouseMove);
//   document.addEventListener("touchend", handleMouseUp);
// };

// const removeEventListeners = () => {
//   document.removeEventListener("mousewheel", handleWheel);
//   document.removeEventListener("mousedown", handleMouseDown);
//   document.removeEventListener("mousemove", handleMouseMove);
//   document.removeEventListener("mouseup", handleMouseUp);
//   document.removeEventListener("touchstart", handleMouseDown);
//   document.removeEventListener("touchmove", handleMouseMove);
//   document.removeEventListener("touchend", handleMouseUp);
// };


// let $items: NodeListOf<HTMLElement>;
// let $cursors: NodeListOf<HTMLElement>;

// const handleClickOnItem = (i: number) => {
//   progress = (i / $items.length) * 100 + 10;
//   animate();
// };

// const initializeItems = () => {
//   $items = document.querySelectorAll(".carousel-item");
//   $cursors = document.querySelectorAll(".cursor");
//   $items.forEach((item, i) => {
//     item.addEventListener("click", () => handleClickOnItem(i));
//   });
// };


// const handleWheel = (e: WheelEvent) => {
//   const wheelProgress = e.deltaY * speedWheel;
//   progress = progress + wheelProgress;
//   animate();
// };

// const handleMouseMove = (e: MouseEvent | TouchEvent) => {
// if (e.type === "mousemove") {
// $cursors.forEach(($cursor) => {
// $cursor.setAttribute("style", transform: translate(${e.clientX}px, ${e.clientY}px););
// });
// }
// if (!isDown) return;
// const x = (e as MouseEvent).clientX || ((e as TouchEvent).touches && (e as TouchEvent).touches[0].clientX) || 0;
// const mouseProgress = (x - startX) * speedDrag;
// progress = progress + mouseProgress;
// startX = x;
// animate();
// };

// const handleMouseDown = (e: MouseEvent | TouchEvent) => {
// isDown = true;
// startX = (e as MouseEvent).clientX || ((e as TouchEvent).touches && (e as TouchEvent).touches[0].clientX) || 0;
// };

// const handleMouseUp = () => {
//     isDown = false;
//     };
    
//     const Carousel = () => {
//     useEffect(() => {
//     animate();
//     /*--------------------
// Listeners
// --------------------*/
// document.addEventListener("mousewheel", handleWheel);
// document.addEventListener("mousedown", handleMouseDown);
// document.addEventListener("mousemove", handleMouseMove);
// document.addEventListener("mouseup", handleMouseUp);
// document.addEventListener("touchstart", handleMouseDown);
// document.addEventListener("touchmove", handleMouseMove);
// document.addEventListener("touchend", handleMouseUp);

// return () => {
//   /*--------------------
//   Remove Listeners
//   --------------------*/
//   document.removeEventListener("mousewheel", handleWheel);
//   document.removeEventListener("mousedown", handleMouseDown);
//   document.removeEventListener("mousemove", handleMouseMove);
//   document.removeEventListener("mouseup", handleMouseUp);
//   document.removeEventListener("touchstart", handleMouseDown);
//   document.removeEventListener("touchmove", handleMouseMove);
//   document.removeEventListener("touchend", handleMouseUp);
// };
// }, []);

// const $items = document.querySelectorAll(".carousel-item");
// const $cursors = document.querySelectorAll(".cursor");

// const Carousel = () => {
//   return (
//     <div className="carousel-body">
//       <div className="carousel">
//         <div className="carousel-item">
//           <div className="carousel-box">
//             <div className="carousel-title">Paris</div>
//             <div className="num">01</div>
//             <img
//               className="carousel-image"
//               src="https://media.istockphoto.com/id/949299844/it/foto/vista-prospettica-dellesterno-delledificio-contemporaneo.jpg?s=612x612&w=0&k=20&c=_DR1aRHuTEV3EYBJo1ZXq1pF4SgwB9EVWQLaBj4sC5g="
//             />
//           </div>
//         </div>

//         <div className="carousel-item">
//           <div className="carousel-box">
//             <div className="carousel-title">Warsaw</div>
//             <div className="num">02</div>
//             <img
//               className="carousel-image"
//               src="https://media.istockphoto.com/id/1150545984/it/foto/palazzo-moderno-di-lusso-con-piscina.jpg?s=612x612&w=0&k=20&c=Pbrai_VGc9tUviMCF1UaBErdS1YGyIVWsD29jzMZwTY="
//             />
//           </div>
//         </div>

//         <div className="carousel-item">
//           <div className="carousel-box">
//             <div className="carousel-title">Madrid</div>
//             <div className="num">03className="carousel-image" </div>
//             <img src="https://media.istockphoto.com/id/1214351345/it/foto/guardando-direttamente-lo-skyline-del-quartiere-finanziario-nel-centro-di-londra-immagine-di.jpg?s=612x612&w=0&k=20&c=oNNbPzPvcQ-4RA6AeatNIxHQIafBiXmDRtUUY0Ska-I=" />
//           </div>
//         </div>

//         <div className="carousel-item">
//           <div className="carousel-box">
//             <div className="carousel-title">Sydney</div>
//             <div className="num">04</div>
//             <img
//               className="carousel-image"
//               src="https://media.istockphoto.com/id/904390980/it/foto/foto-di-architettura-contemporanea-astratta.jpg?s=612x612&w=0&k=20&c=_P4Wmx5nq5MeDuimpNklKCBlrLovmCyd9lfiMKeJZDs="
//             />
//           </div>
//         </div>

//         <div className="cursor"></div>
//         <div className="cursor cursor2"></div>

//       </div>
//     </div>
//   );
// };

// export default Carousel;

