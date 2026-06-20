const driveLinks = {
  barnamijMutadaris: "https://drive.google.com/drive/folders/1ex6VqQkV0rx1rti-xrRwMmNA0s5MkRhD?usp=drive_link",
  tafassirNamudajiya: "https://drive.google.com/drive/folders/1HnUtKgQecBeP_bVaF3nsPetA6voLprQJ?usp=drive_link",
  taqarir: "https://drive.google.com/drive/folders/1J2HxDcArR8T0z9L8XKcntnNZHp1FMG87?usp=drive_link",
  barnamijMusahib: "https://drive.google.com/drive/folders/1YVt3M1_i41qIiPG8zrktI7--6fh_JF-e?usp=drive_link",
  fadaIstizada: "https://drive.google.com/drive/folders/1f2tZXKzrOzuUksv8RECo0QU4gPrAmJ2P?usp=drive_link",
  anshitaTaahudTaaluf: "https://drive.google.com/drive/folders/1NzZVRWFR5RzG_YZRfcl5abzDF_BHntAS?usp=drive_link"
};

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    const key = card.getAttribute("data-key");
    const url = driveLinks[key];
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      console.warn("لا يوجد رابط مرتبط بالمفتاح:", key);
    }
  });
});
