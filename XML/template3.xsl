<?xml version="1.0"  encoding="utf-8" standalone="no"?>

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0"> 

<xsl:strip-space elements="*"/>

<xsl:output method="xml" version="1.0" encoding="UTF-8" indent="yes"/>

<xsl:template match="/">

  <BASE>
    <FILMS>
        <xsl:apply-templates select="FILMS/Film"/>
    </FILMS>

    <ACTEURS>
        <xsl:apply-templates select="FILMS/Film/Acteurs"/>
    </ACTEURS>

    <REALISATEURS>
      <xsl:apply-templates select="FILMS/Film/Realisateur"/>
    </REALISATEURS>  
  </BASE>

</xsl:template>

<xsl:template match="Film">
  <Film>

    <xsl:copy-of select="*[name()!='Realisateur' and name()!='Acteurs']"/>

  </Film>

</xsl:template>


<xsl:template match="Acteurs">

    <xsl:copy-of select="Acteur"/>
</xsl:template>

<xsl:template match="Realisteur">
  <Realisateur>
    <Nom><xsl:copy-of select="Realisateur/Nom"/></Nom>
    <Prenom><xsl:copy-of select="Realisateur/Prenom"/></Prenom>
  </Realisateur>

</xsl:template>


</xsl:stylesheet>