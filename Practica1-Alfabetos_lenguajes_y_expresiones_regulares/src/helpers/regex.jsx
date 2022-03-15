
export const evaluaCadena = (string) =>{
    const re = /^([b-df-hj-ñp-tv-z]*a+[b-df-hj-ñp-tv-z]*e+[b-df-hj-ñp-tv-z]*i+[b-df-hj-ñp-tv-z]*o+[b-df-hj-ñp-tv-z]*u+[b-df-hj-ñp-tv-z]*)+$/gs;
    if(re.test(string)) return true;
    else return false;
}