import PropTypes from "prop-types";
import { IconExternalLink, IconCode } from "@tabler/icons-react";
const ProBox = ({ title, img, description, code, demo }) => {
  return (
    <div className="overflow-hidden rounded-3xl border-[1px] p-10 transition duration-300 bg-white font-[1.7rem] hover:border-black/20 border-[#4d4d4d]/10 lg:h-[350px] lg:p-16 lg:pe-0 relative shadow-sm">
      <div className="flex h-full w-full flex-col gap-4 lg:w-1/2">
        <div className="flex  m-auto gap-3 md:m-0">
          <p className="font-extrabold text-black text-3xl">{title}</p>
          <div className="w-2 h-2 rounded-full bg-[#0db91b]" />
        </div>
        <p className="flex-1 text-[#767676] font-sans text-2xl">
          {description}
        </p>
        <div className="flex gap-12 m-auto md:m-0">
          <a
            className="cursor-pointer rounded-lg items-center inline-flex font-medium group mt-6 justify-start gap-2 text-xl transition lg:mt-0 bg-gray-50 hover:bg-gray-100 border-[1px] border-black/10 hover:border-black/30  duration-300 py-1 px-2"
            href={demo}
            target="_blank"
          >
            <IconExternalLink size={16} /> Live Demo
          </a>
          <a
            className="cursor-pointer rounded-lg items-center inline-flex font-medium group mt-6 justify-start gap-2 text-xl transition lg:mt-0 bg-gray-50 hover:bg-gray-100  border-[1px] border-black/10 hover:border-black/30  duration-300 py-1 px-2"
            href={code}
            target="_blank"
          >
            <IconCode size={16} /> Code
          </a>
        </div>
      </div>
      <a
        href="#"
        className="hidden lg:block absolute inset-y-12 -right-[5rem] transition duration-300 ease-out hover:scale-110"
      >
        <img alt={`${title} preview`} loading="lazy" width={500} src={img} />
      </a>
    </div>
  );
};
ProBox.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  demo: PropTypes.string.isRequired,
};
export default ProBox;
