// ClassDiagram.tsx
import React, { useEffect } from 'react';
import mermaid from 'mermaid';

interface ClassDiagramProps {
  definition: string;
}

const ClassDiagram: React.FC<ClassDiagramProps> = ({ definition }) => {
  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });

    const classDiagramContainer = document.getElementById('classDiagram');
    if (classDiagramContainer) {
      const svgContainer = document.createElement('div');
      // @ts-ignore
      mermaid.render('classDiagram', definition, (svgCode: string) => {
        svgContainer.innerHTML = svgCode;
        while (classDiagramContainer.firstChild) {
          classDiagramContainer.removeChild(classDiagramContainer.firstChild);
        }
        classDiagramContainer.appendChild(svgContainer.firstElementChild as Element);
      });
    }

    // Specify the return type of useEffect callback
    return () => {
      // Cleanup logic if needed
    };
  }, [definition]);

  return <div id="classDiagram" />;
};

export default ClassDiagram;
