// Generated by https://quicktype.io

export interface AnimalsResponse {
    count:             number;
    region_identifier: string;
    page:              string;
    result:            Result[];
}

export interface Result {
    taxonid:             number;
    kingdom_name:        KingdomName;
    phylum_name:         PhylumName;
    class_name:          ClassName;
    order_name:          string;
    family_name:         string;
    genus_name:          string;
    scientific_name:     string;
    taxonomic_authority: null | string;
    infra_rank:          InfraRank | null;
    infra_name:          null | string;
    population:          null;
    category:            Category;
    main_common_name:    null | string;
}

export enum Category {
    CR = "CR",
    DD = "DD",
    En = "EN",
    Ew = "EW",
    Ex = "EX",
    Lc = "LC",
    NT = "NT",
    Na = "NA",
    Re = "RE",
    Vu = "VU",
}

export enum ClassName {
    Actinopterygii = "ACTINOPTERYGII",
    Amphibia = "AMPHIBIA",
    Anthocerotopsida = "ANTHOCEROTOPSIDA",
    Bivalvia = "BIVALVIA",
    Bryopsida = "BRYOPSIDA",
    Cephalaspidomorphi = "CEPHALASPIDOMORPHI",
    Chondrichthyes = "CHONDRICHTHYES",
    Gastropoda = "GASTROPODA",
    Gnetopsida = "GNETOPSIDA",
    Insecta = "INSECTA",
    Jungermanniopsida = "JUNGERMANNIOPSIDA",
    Liliopsida = "LILIOPSIDA",
    Lycopodiopsida = "LYCOPODIOPSIDA",
    Magnoliopsida = "MAGNOLIOPSIDA",
    Mammalia = "MAMMALIA",
    Marchantiopsida = "MARCHANTIOPSIDA",
    Myxini = "MYXINI",
    Pinopsida = "PINOPSIDA",
    Polypodiopsida = "POLYPODIOPSIDA",
    Polytrichopsida = "POLYTRICHOPSIDA",
    Reptilia = "REPTILIA",
    Sphagnopsida = "SPHAGNOPSIDA",
}

export enum InfraRank {
    SSP = "ssp.",
    Subsp = "subsp.",
    Var = "var.",
}

export enum KingdomName {
    Animalia = "ANIMALIA",
    Plantae = "PLANTAE",
}

export enum PhylumName {
    Anthocerotophyta = "ANTHOCEROTOPHYTA",
    Arthropoda = "ARTHROPODA",
    Bryophyta = "BRYOPHYTA",
    Chordata = "CHORDATA",
    Marchantiophyta = "MARCHANTIOPHYTA",
    Mollusca = "MOLLUSCA",
    Tracheophyta = "TRACHEOPHYTA",
}
