if (Tool.getSupertToLocalStorage() != undefined) {
    SuperHeroes = Tool.getSupertToLocalStorage();
    SelecSuperHeroes();
    tablaSuperHeroe();
}
if (Tool.getVillanosToLocalStore() != undefined) {
    Villanos = Tool.getVillanosToLocalStore();
    Tool.establecerAsociaciones(Villanos,SuperHeroes);
    tablaVillano();
}

