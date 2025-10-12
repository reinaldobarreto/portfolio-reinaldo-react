param(
  [string]$SourcePath = "public/Desenvolvedor Mobile FlutterDart-compactado.pdf",
  [string]$TargetPath = "public/curriculo-reinaldo-barreto.pdf"
)

if (-Not (Test-Path $SourcePath)) {
  Write-Error "Arquivo de origem não encontrado: $SourcePath";
  exit 1;
}

if (Test-Path $TargetPath) {
  Remove-Item $TargetPath -Force;
}

Rename-Item -Path $SourcePath -NewName (Split-Path $TargetPath -Leaf) -Force;
Write-Output "Renomeado para: $TargetPath";