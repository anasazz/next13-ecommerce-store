import Container from "@/components/ui/container";

const Success = async () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center h-screen">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-green-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 2a8 8 0 100 16 8 8 0 000-16zM5 9a.5.5 0 01.293-.455l4-2a.5.5 0 01.414 0l4 2a.5.5 0 01.293.455V10a.5.5 0 01-.5.5h-8a.5.5 0 01-.5-.5V9z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M5.293 9.456a1 1 0 01.704-.105l4 2a1 1 0 01.001 1.698l-4 2a1 1 0 01-1.408-1.079V9.456z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M4.293 8.456a1 1 0 01.704-.105l4 2a1 1 0 01.001 1.698l-4 2a1 1 0 01-1.408-1.079V8.456z"
            clipRule="evenodd"
          />
        </svg>
        <p className="mt-4 text-lg font-semibold text-center text-green-500">
          Commande créée avec succès. Nous vous appellerons pour confirmer la commande.
        </p>
      </div>
    </Container>
  );
};

export default Success;
